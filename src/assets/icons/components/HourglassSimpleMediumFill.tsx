import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassSimpleMediumFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hourglass-simple-medium-fill_svg__a)"><path fill="#000" d="M13.199 12.285 8.723 8 13.2 3.715l.008-.008A1 1 0 0 0 12.5 2h-9a1 1 0 0 0-.699 1.715L7.277 8 2.8 12.285l-.008.008A1 1 0 0 0 3.5 14h9a1 1 0 0 0 .699-1.715M12.5 3l-1.568 1.5H5.068L3.5 3zm-9 10 4-3.829V10.5a.5.5 0 0 0 1 0V9.171l4 3.829z" /></g><defs><clipPath id="hourglass-simple-medium-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHourglassSimpleMediumFill);
const Memo = memo(ForwardRef);
export default Memo;