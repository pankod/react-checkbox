import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: props.checked
		};
	}

	componentWillReceiveProps(nextProps) {
		if ('checked' in nextProps) {
			this.setState({
				checked: nextProps.checked,
			});
		}
	}

	focus() {
		this.input.focus();
	}

	blur() {
		this.input.blur();
	}

	onChange = (e) => {
		const { props } = this;
		if (props.disabled) {
			return;
		}

		if (props.onChange) {
			props.onChange(e, e.target.checked);
		}
	};

	render() {
		const { errorText, label, renderLabelAsHtml, onFocus, onBlur } = this.props;
		const hasError = errorText && errorText.length > 0;
		const className = this.props.className ? this.props.className : '';

		return (
			<div key={`${this.props.id}_wrapper`} className={className}>
				<label htmlFor={this.props.id} className={`${className}-label`} style={this.props.style}>
					<input
						{...this.props.inputProps}
						id={this.props.id}
						type="checkbox"
						className={`${className}-input`}
						checked={this.state.checked}
						onChange={e => this.onChange(e)}
						onFocus={() => onFocus()}
						onBlur={() => onBlur()}
						disabled={this.props.disabled}
					/>
					{renderLabelAsHtml && <span dangerouslySetInnerHTML={{ __html: label }}></span>}
					{!renderLabelAsHtml && <span>{label}</span>}
					<span className={`${className}-checkmark`} />
					{hasError &&
						<span className={`${className}-errorMessage`}>
							{errorText}
						</span>
					}
				</label>
			</div>
		);
	}

	static propTypes = {
		id: PropTypes.string,
		errorText: PropTypes.string,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		onChange: PropTypes.func,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		inputProps: PropTypes.object,
		checked: PropTypes.bool,
		className: PropTypes.string,
		style: PropTypes.object,
		disabled: PropTypes.bool,
		renderLabelAsHtml: PropTypes.bool
	};

	static defaultProps = {
		errorText: '',
		label: '',
		className: '',
		style: {},
		inputProps: {},
		checked: false,
		disabled: false,
		renderLabelAsHtml: false,
		onFocus() { },
		onBlur() { },
		onChange() { },
	};
}
