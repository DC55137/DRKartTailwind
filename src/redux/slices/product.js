import { createSlice } from '@reduxjs/toolkit'
import sum from 'lodash/sum'
import uniqBy from 'lodash/uniqBy'
import axios from 'axios'
//

import { dispatch } from '../store'

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  products: [],
  product: [],
  sortBy: null,
  order: null,
  filters: {
    gender: [],
    category: 'Karts',
    colors: [],
    priceRange: '',
    rating: '',
  },
  checkout: {
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    contactName: '',
    contactEmail: '',
    contactAddress: '',
  },
}

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },

    // NEW ORDER
    newOrderSuccess(state, action) {
      state.isLoading = false
      state.order = action.payload
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false
      state.products = action.payload
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.product = action.payload
      state.isLoading = false
    },

    //  SORT & FILTER PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload
    },

    filterProducts(state, action) {
      state.filters.gender = action.payload.gender
      state.filters.category = action.payload.category
      state.filters.colors = action.payload.colors
      state.filters.priceRange = action.payload.priceRange
      state.filters.rating = action.payload.rating
    },

    // CHECKOUT
    getCart(state, action) {
      const cart = action.payload

      const subtotal = sum(
        cart.map((cartItem) => cartItem.price * cartItem.quantity)
      )
      const discount = cart.length === 0 ? 0 : state.checkout.discount
      const shipping = cart.length === 0 ? 0 : state.checkout.shipping

      state.checkout.cart = cart
      state.checkout.discount = discount
      state.checkout.shipping = shipping
      state.checkout.subtotal = subtotal
      state.checkout.total = subtotal - discount
    },
    updateJobRows(state, action) {
      state.jobs = state.jobs.map((obj) => {
        if (obj._id === action.payload._id) {
          return { ...obj, ...action.payload }
        }
        return obj
      })
    },

    updateCheckout(state, action) {
      state.checkout = { ...state.checkout, ...action.payload }
    },

    addCart(state, action) {
      const product = action.payload
      const isEmptyCart = state.checkout.cart.length === 0

      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, product]
      } else {
        state.checkout.cart = state.checkout.cart.map((_product) => {
          const isExisted = _product._id === product._id
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + product.quantity,
            }
          }

          return _product
        })
      }
      state.checkout.cart = uniqBy([...state.checkout.cart, product], '_id')
    },

    deleteCart(state, action) {
      const updateCart = state.checkout.cart.filter(
        (item) => item._id !== action.payload
      )

      state.checkout.cart = updateCart
    },

    resetCart(state) {
      state.checkout.cart = []
      state.checkout.total = 0
      state.checkout.subtotal = 0
      state.checkout.discount = 0
      state.checkout.shipping = 0
      state.checkout.contactAddress = ''
      state.checkout.contactEmail = ''
      state.checkout.contactName = ''
    },

    onBackStep(state) {
      state.checkout.activeStep -= 1
    },

    onNextStep(state) {
      state.checkout.activeStep += 1
    },

    onGotoStep(state, action) {
      const goToStep = action.payload
      state.checkout.activeStep = goToStep
    },

    changeQuantity(state, action) {
      const productId = action.payload.id
      const updateCart = state.checkout.cart.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            quantity: action.payload.quantity,
          }
        }
        return product
      })

      state.checkout.cart = updateCart
    },

    removeProduct(state, action) {
      const productId = action.payload

      const updateCart = state.checkout.cart.filter(
        (product) => product._id !== productId
      )
      state.checkout.cart = updateCart
    },

    increaseQuantity(state, action) {
      const productId = action.payload
      const updateCart = state.checkout.cart.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })

      state.checkout.cart = updateCart
    },

    decreaseQuantity(state, action) {
      const productId = action.payload
      const updateCart = state.checkout.cart.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product
      })

      state.checkout.cart = updateCart
    },

    createBilling(state, action) {
      state.checkout.billing = action.payload
    },

    applyDiscount(state, action) {
      const discount = action.payload
      state.checkout.discount = discount
      state.checkout.total = state.checkout.subtotal - discount
    },

    applyShipping(state, action) {
      const shipping = action.payload
      state.checkout.shipping = shipping
      state.checkout.total =
        state.checkout.subtotal - state.checkout.discount + shipping
    },
  },
})

// Reducer
export default slice.reducer

// Actions
export const {
  getCart,
  addCart,
  resetCart,
  updateCheckout,
  onGotoStep,
  onBackStep,
  onNextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  changeQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  sortByProducts,
  filterProducts,
  startLoading,
  newOrderSuccess,
} = slice.actions

// ----------------------------------------------------------------------

export function getProducts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await fetch('/api/getProducts')
      const data = await response.json()
      dispatch(slice.actions.getProductsSuccess(data.products))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}

// ----------------------------------------------------------------------

export function getProduct(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios(`/api/getProduct?id=${id}`)
      dispatch(slice.actions.getProductSuccess(response.data.product))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}

// ----------------------------------------------------------------------

export function newOrder(order) {
  const { billing, total, cart } = order
  const newOrder = { billing, total, cart }
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      await fetch('/api/orders', newOrder)
      dispatch(slice.actions.newOrderSuccess())
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}
