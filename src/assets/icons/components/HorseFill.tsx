import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHorseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#horse-fill_svg__a)"><path fill="#000" d="M12.628 3.438A6.45 6.45 0 0 0 8 1.5h-.5A.5.5 0 0 0 7 2v1.72L.738 7.575a.5.5 0 0 0-.162.691l.861 1.375.02.027a1.99 1.99 0 0 0 1.958.802c.87-.148 2.414-.409 3.837.205L5.59 12.96a5.3 5.3 0 0 1-1.256-.835.502.502 0 0 0-.667.75A6.46 6.46 0 0 0 7.996 14.5h.135a6.499 6.499 0 0 0 4.5-11.062zM7.75 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="horse-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHorseFill);
const Memo = memo(ForwardRef);
export default Memo;