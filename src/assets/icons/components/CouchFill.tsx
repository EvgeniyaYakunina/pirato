import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCouchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#couch-fill_svg__a)"><path fill="#000" d="M1 6.25V4.5a1 1 0 0 1 1-1h5.25a.25.25 0 0 1 .25.25V8.5H4a2 2 0 0 0-2-2h-.75A.25.25 0 0 1 1 6.25m13 .25h.75a.25.25 0 0 0 .25-.25V4.5a1 1 0 0 0-1-1H8.75a.25.25 0 0 0-.25.25V8.5H12a2 2 0 0 1 2-2m.5 1H14a1 1 0 0 0-1 1V9a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 3 9v-.5a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H2v.983a.51.51 0 0 0 .467.517.5.5 0 0 0 .533-.5v-1h10v.983a.51.51 0 0 0 .467.516.5.5 0 0 0 .533-.5V11.5h.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /></g><defs><clipPath id="couch-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCouchFill);
const Memo = memo(ForwardRef);
export default Memo;