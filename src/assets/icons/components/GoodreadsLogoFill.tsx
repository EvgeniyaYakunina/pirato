import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoodreadsLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#goodreads-logo-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M11 10a3 3 0 0 1-5.4 1.8.5.5 0 1 1 .8-.6A2 2 0 0 0 10 10v-.766A3 3 0 0 1 5 7v-.5a3 3 0 0 1 5-2.234V4a.5.5 0 0 1 1 0zm-1-3.5V7a2 2 0 1 1-4 0v-.5a2 2 0 1 1 4 0" /></g><defs><clipPath id="goodreads-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGoodreadsLogoFill);
const Memo = memo(ForwardRef);
export default Memo;