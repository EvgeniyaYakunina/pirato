import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandEyeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-eye-fill_svg__a)"><path fill="#000" d="M9 11.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4.5-4.75v3a5.5 5.5 0 0 1-11 0V4a1 1 0 0 1 2 0v3.5a.5.5 0 1 0 1 0V2a1 1 0 0 1 2 0v5a.5.5 0 1 0 1 0V3a1 1 0 0 1 2 0v5a.5.5 0 0 0 1 0V6.5a1 1 0 0 1 2 0m-2.276 4.638C11.18 11.051 10.13 9 8 9s-3.18 2.05-3.224 2.138a.25.25 0 0 0 0 .224C4.82 11.449 5.87 13.5 8 13.5s3.18-2.05 3.224-2.138a.25.25 0 0 0 0-.224" /></g><defs><clipPath id="hand-eye-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandEyeFill);
const Memo = memo(ForwardRef);
export default Memo;