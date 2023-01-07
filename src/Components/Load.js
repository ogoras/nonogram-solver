import React from "react";

class Load extends React.Component {
    render() {
        return (
        <div>
            {/* button to load a PNG file from url */}
            <label>
            Load:
            <input type="text" name="load" />
            </label>
            <button onClick={
                () => this.props.onClick(
                    document.getElementsByName("load")[0].value
                )
            }>Load</button>
        </div>
        );
    }
} 

export default Load;