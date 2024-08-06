import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-six-fill_svg__a)"><path fill="#000" d="M12 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M8 5a.5.5 0 1 0-1 0v2H4.5V5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V8H7v2a.5.5 0 0 0 1 0zm5 4.5a2 2 0 0 0-2-2l.722-1.25a.5.5 0 0 0-.866-.5L9.268 8.5l-.009.017A2 2 0 1 0 13 9.5" /></g><defs><clipPath id="text-h-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHSixFill);
const Memo = memo(ForwardRef);
export default Memo;