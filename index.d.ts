
 interface InitialValue {
    x: number;
    y: number;
}
export interface DraggableViewPropsProps extends AccessibilityProps, ViewProps {
    maxHeight?: Number;
    minHeight?: Number;
    maxWidth?: Number;
    minWidth?: Number;
    initValue?: InitialValue;
    onRelease?(): void;
    /**
     * Render children.
     */
    children?: React.ReactNode;
}

declare const DraggableView: React.ComponentType<DraggableViewProps> & FastImageStaticProperties;

export default DraggableView;