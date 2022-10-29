import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldComp = () => {

	const handleChange = () => {

	}

  return (
	<Box mt={3} width="100%">
		<FormControl fullWidth>
			<TextField onChange={handleChange} type="number" variant="outlined" label="Amount of Questions"></TextField>
		</FormControl>
	</Box>
  )
}

export default TextFieldComp