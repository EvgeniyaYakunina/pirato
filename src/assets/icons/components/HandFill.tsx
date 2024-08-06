import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-fill_svg__a)"><path fill="#000" d="M13.5 4v5.683c0 2.888-2.303 5.285-5.187 5.317a5.23 5.23 0 0 1-3.775-1.537C3.174 12.02 1.634 8.5 1.634 8.5a1 1 0 0 1 .409-1.39c.478-.25 1.068-.052 1.337.415l1.313 2.277a.38.38 0 0 0 .375.193h.007a.51.51 0 0 0 .425-.511V3a1 1 0 0 1 1.048-1c.538.025.952.489.952 1.027V7a.5.5 0 0 0 .533.5.51.51 0 0 0 .467-.515V2a1 1 0 0 1 1.048-1c.538.025.952.489.952 1.027V7.5a.5.5 0 0 0 .533.5.51.51 0 0 0 .467-.515V4.028c0-.538.414-1 .952-1.027a1 1 0 0 1 1.048 1" /></g><defs><clipPath id="hand-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandFill);
const Memo = memo(ForwardRef);
export default Memo;