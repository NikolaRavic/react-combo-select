import React, { Component } from 'react';

export default class ComboSelectItem extends Component {

    _generateInput() {
        var input;
        if (this.props.type == 'select') {
            (this.props.selected) ? input = (<i className="fa fa-check-circle"></i>) : input = (
                <i className="fa fa-circle-o"></i>);
        } else {
            (this.props.selected) ? input = (<i className="fa fa-check-square"></i>) : input = (
                <i className="fa fa-square-o"></i>);
        }

        return input;
    }

    render() {
        let input = this._generateInput();

        return (
            <div
                className={'combo-select-item' + ((this.props.focused) ? ' active' : '') + ((this.props.selected) ? ' selected' : '')}
                onClick={() => this.props.selectItem(this.props.item)}
                onMouseEnter={() => this.props.focusItem(this.props.index)}>
                {input}
                {this.props.dataType == 'object' ? this.props.item[this.props.map.text] : this.props.item}
            </div>
        );
    }
}

ComboSelectItem.propTypes = {
    item: React.PropTypes.object,
    index: React.PropTypes.number,
    map: React.PropTypes.object,
    focused: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    type: React.PropTypes.string,
    dataType: React.PropTypes.string,
    selectItem: React.PropTypes.func,
    focusItem: React.PropTypes.func
};