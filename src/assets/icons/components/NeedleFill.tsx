import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNeedleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#needle-fill_svg__a)"><path fill="#000" d="M13.268 2.732a2.5 2.5 0 0 0-3.535 0l-1.5 1.5a.5.5 0 0 0-.14.27c-.55 3.203-5.843 8.544-5.945 8.644a.5.5 0 1 0 .706.707C2.908 13.8 8.281 8.46 11.5 7.906a.5.5 0 0 0 .27-.14l1.5-1.5a2.5 2.5 0 0 0 0-3.534zm-1.414 2.122-1 1a.5.5 0 1 1-.708-.708l1-1a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="needle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNeedleFill);
const Memo = memo(ForwardRef);
export default Memo;