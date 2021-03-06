import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from '~/components/icon-settings';
import Input from '~/components/input'; // `~` is replaced with design-system-react at runtime
import InputIcon from '~/components/icon/input-icon'; // `~` is replaced with design-system-react at runtime

const Example = createReactClass({
	displayName: 'ErrorInputExample',

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					<div className="slds-col_padded">
						<Input
							id="unique-id-4"
							label="Input Label"
							required
							errorText="Error Message"
							placeholder="Placeholder Text"
						/>
					</div>
					<div className="slds-col_padded">
						<Input
							iconLeft={
								<InputIcon
									assistiveText="Search"
									name="warning"
									category="utility"
									color="warning"
									onClick={() => {
										console.log('Icon Clicked');
									}}
								/>
							}
							id="unique-id-4"
							label="Input Label"
							required
							errorText="Error Message"
							placeholder="Placeholder Text"
						/>
					</div>
				</div>
			</IconSettings>
		);
	},
});

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
