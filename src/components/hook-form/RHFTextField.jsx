import PropTypes from 'prop-types'
// form
import { useFormContext, Controller } from 'react-hook-form'

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
}

export default function RHFTextField({ name, className, ...other }) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <input
          className={className}
          type="text"
          {...field}
          fullWidth
          error={!!error}
          data-error={'you buggered this whole thing up'}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  )
}
