import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCellSignalSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cell-signal-slash-fill_svg__a)"><path fill="#000" d="M13.336 13.87a.5.5 0 0 1-.706-.034l-.344-.379A1 1 0 0 1 12 13.5H2a1 1 0 0 1-.941-.662 1.02 1.02 0 0 1 .254-1.063L6.26 6.83 2.64 2.851a.514.514 0 0 1 .009-.711.5.5 0 0 1 .717.023l10 11a.5.5 0 0 1-.03.707m-.774-3.079a.25.25 0 0 0 .438-.168V2.5a1 1 0 0 0-1.707-.708l-3.451 3.45a.25.25 0 0 0-.008.345z" /></g><defs><clipPath id="cell-signal-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCellSignalSlashFill);
const Memo = memo(ForwardRef);
export default Memo;