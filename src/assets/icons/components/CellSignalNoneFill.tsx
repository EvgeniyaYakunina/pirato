import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCellSignalNoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cell-signal-none-fill_svg__a)"><path fill="#000" d="M12.383 1.577a1 1 0 0 0-1.09.216l-10 10A1 1 0 0 0 2 13.5h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-.617-.923M12 12.5H2l10-10z" /></g><defs><clipPath id="cell-signal-none-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCellSignalNoneFill);
const Memo = memo(ForwardRef);
export default Memo;