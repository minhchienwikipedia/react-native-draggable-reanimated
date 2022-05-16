
 interface InitialValue {
    x: number;
    y: number;
}
export interface DraggableViewProps extends AccessibilityProps, ViewProps {
    maxHeight?: Number;
    minHeight?: Number;
    maxWidth?: Number;
    minWidth?: Number;
    initValue?: InitialValue;
    onStart?(): void;
    onRelease?(): void;
    /**
     * Render children.
     */
    children?: React.ReactNode;
}

export default class DraggableView extends React.Component<DraggableViewProps> {};