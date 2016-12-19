# reactToggle
react Toggle

# install
npm install react-toggle --save-dev

# build and start
1. npm install   
2. npm run build   
3. npm run start   

# type

SINGLE_TITLE_TOGGLE
MUTIL_TITLE_TOGGLE
RADIO_TITLE
SINGLE_TOGGLE
MUTIL_TOGGLE
RADIO

# example
```
	let provider = [
		{label : 'java', 				value:'1', checked:''},
		{label : 'ruby', 				value:'2', checked:''},
		{label : 'javascript', 	value:'3', checked:'checked'}
	]

	<ToggleButtons
		type : 'MUTIL_TITLE_TOGGLE', 
		provider : provider,
		labelKey : 'label',
	  valueKey : 'value',
	  activeKey : 'checked',
	  activeVal : 'checked',
	  unActiveVal : ''
	>
	</ToggleButtons>
```