import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCellSignalFullFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cell-signal-full-fill_svg__a)"><path fill="#000" d="M13 2.5v10a1 1 0 0 1-1 1H2a1 1 0 0 1-.706-1.707l10-10A1 1 0 0 1 13 2.5" /></g><defs><clipPath id="cell-signal-full-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCellSignalFullFill);
const Memo = memo(ForwardRef);
export default Memo;