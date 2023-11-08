import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });

    // Pass the selected color back to the parent component
    this.props.onChangeColor(color);
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-selector">
        <button onClick={this.toggleColorList}>Pick a Color</button>
        {isColorListVisible && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li key={index} onClick={() => this.selectColor(color)}>
                <div
                  className="color-square"
                  style={{ backgroundColor: color }}
                ></div>
              </li>
            ))}
          </ul>
        )}
        {selectedColor && (
          <div className="selected-color">
            Selected Color: {selectedColor}
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;