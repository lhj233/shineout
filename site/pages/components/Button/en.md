# Button

<example />

## API

### Button

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | required | The content inside the button, can be a text icon, etc.  |
| className | string | - | extend className |
| disabled | boolean | false | Specifies the button should be disabled |
| href | string | - | If the href attribute is set, &lt;a> will be used instead of &lt;button>. |
| outline | boolean | false | When outline is true, the background is transparent. |
| size | 'large' \| 'default' \| 'small' | 'default' | size of button |
| style | object | - | Container element style |
| type | 'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'link' | 'default' | type of button |
| text | boolean | false | text button |

### Button.Group

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | required | array of Button |
| size | string | - | same as Button |
| outline | boolean | - | same as Button |
| type | string | - | same as Button |
