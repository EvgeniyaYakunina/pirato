import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLighthouseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lighthouse-fill_svg__a)"><path fill="#000" d="M13 5a.5.5 0 0 0-.5.5v1h-.697L11.5 3.45a.5.5 0 0 0-.168-.325L8.652.742 8.64.732a1 1 0 0 0-1.28 0l-.013.01-2.68 2.383a.5.5 0 0 0-.167.325L4.197 6.5H3.5v-1a.5.5 0 1 0-1 0V7a.5.5 0 0 0 .5.5h1.096l-.592 5.905A1 1 0 0 0 4.5 14.5h7a1 1 0 0 0 .995-1.098L11.904 7.5H13a.5.5 0 0 0 .5-.5V5.5A.5.5 0 0 0 13 5M5.453 4h5.094l.25 2.5H8.5v-1a.5.5 0 1 0-1 0v1H5.202zM4.5 13.5l.3-3h6.4l.3 3z" /></g><defs><clipPath id="lighthouse-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLighthouseFill);
const Memo = memo(ForwardRef);
export default Memo;