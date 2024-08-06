import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinktreeLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#linktree-logo-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-4 11a.5.5 0 0 1-1 0V10a.5.5 0 1 1 1 0zm3-5H9.207l1.647 1.646a.5.5 0 0 1-.708.708L8 7.707 5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5H4.5a.5.5 0 1 1 0-1h2.293L5.146 4.854a.5.5 0 1 1 .708-.708L7.5 5.793V3.5a.5.5 0 1 1 1 0v2.293l1.646-1.647a.5.5 0 0 1 .708.708L9.207 6.5H11.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="linktree-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinktreeLogoFill);
const Memo = memo(ForwardRef);
export default Memo;