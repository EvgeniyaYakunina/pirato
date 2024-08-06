import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkerCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#marker-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 11.398a5.5 5.5 0 0 1-5 0V11h5zM6.5 10V9h3v1zm5 2.24V11a1 1 0 0 0-1-1V9a1 1 0 0 0-.85-.988l-.671-3.216a1 1 0 0 0-1.958 0l-.67 3.216A1 1 0 0 0 5.5 9v1a1 1 0 0 0-1 1v1.24a5.5 5.5 0 1 1 7 0" /></g><defs><clipPath id="marker-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMarkerCircleFill);
const Memo = memo(ForwardRef);
export default Memo;