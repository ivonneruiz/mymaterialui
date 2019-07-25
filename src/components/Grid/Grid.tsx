//#region Imports
import React from 'react';

// EDS
import EdsGrid from '@material-ui/core/Grid';
//#endregion

//#region Internal types
export interface IGridProps {
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    children?: React.ReactNode;
    classes?: object;
    className?: string;
    component?: string | object;
    container?: boolean;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    id?: string;
    item?: boolean;
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    spacing?: 0 | 8 | 16 | 24 | 32 | 40;
    style?: object;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    xl?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    zeroMinWidth?: boolean;
}

let defaultPropsGrid: IGridProps = {};

const defaultProps: IGridProps = {
    component: 'div',
    container: false,
    item: false,
    zeroMinWidth: false,
};

const defaultPropsContainer: IGridProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    direction: 'row',
    justify: 'flex-start',
    spacing: 0,
    wrap: 'wrap',
    ...defaultProps
};

const defaultPropsItem: IGridProps = {
    lg: false,
    md: false,
    sm: false,
    xl: false,
    xs: false,
    ...defaultProps
};
//#endregion

//#region Component
const Grid: React.FC<IGridProps> = (props: IGridProps): JSX.Element => {
    const {
        container,
        item
    } = props;

    if (container) {
        defaultPropsGrid = defaultPropsContainer;
    } else if (item) {
        defaultPropsGrid = defaultPropsItem;
    } else {
        defaultPropsGrid = defaultProps;
    }

    return (
        <EdsGrid {...props} />
    );

};

Grid.defaultProps = defaultPropsGrid;
//#endregion

// Export: Component
export default Grid;