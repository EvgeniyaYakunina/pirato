import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPasswordFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#password-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1.214 5.92a.502.502 0 0 1-.812.588L11.5 8.85l-.477.656a.502.502 0 0 1-.812-.588l.477-.656-.772-.25a.5.5 0 0 1 .312-.95l.772.25V6.5a.5.5 0 0 1 1 0v.813l.772-.25a.5.5 0 1 1 .312.95l-.772.25zm-4.5 0a.501.501 0 1 1-.812.588L7 8.85l-.477.656a.502.502 0 0 1-.812-.588l.477-.656-.772-.25a.5.5 0 0 1 .312-.95l.772.25V6.5a.5.5 0 1 1 1 0v.813l.772-.25a.5.5 0 1 1 .312.95l-.772.25zM4 5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0" /></g><defs><clipPath id="password-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPasswordFill);
const Memo = memo(ForwardRef);
export default Memo;