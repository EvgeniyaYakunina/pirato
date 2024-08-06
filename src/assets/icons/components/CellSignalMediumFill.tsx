import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCellSignalMediumFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cell-signal-medium-fill_svg__a)"><path fill="#000" d="M12.382 1.577a1 1 0 0 0-1.09.216l-10 10A1 1 0 0 0 2 13.5h10a1 1 0 0 0 1-1v-10a.995.995 0 0 0-.618-.923M12 12.5H8v-6l4-4z" /></g><defs><clipPath id="cell-signal-medium-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCellSignalMediumFill);
const Memo = memo(ForwardRef);
export default Memo;