import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionBackgroundFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-background-fill_svg__a)"><path fill="#000" d="M4.5 7H9v4.5H4.5zM14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M6 4.5a.5.5 0 1 0 1 0h1a.5.5 0 1 0 0-1H7a1 1 0 0 0-1 1M10 7a1 1 0 0 0-1-1H4.5a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1zm2.5 1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 0 1 1 1 0 0 0 1-1zm0-3.5a1 1 0 0 0-1-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0z" /></g><defs><clipPath id="selection-background-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionBackgroundFill);
const Memo = memo(ForwardRef);
export default Memo;