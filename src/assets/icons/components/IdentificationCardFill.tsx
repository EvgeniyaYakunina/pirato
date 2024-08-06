import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIdentificationCardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#identification-card-fill_svg__a)"><path fill="#000" d="M7 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5-4v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1m-6.016 6.875A2.49 2.49 0 0 0 7.41 8.916a2 2 0 1 0-2.82 0 2.5 2.5 0 0 0-1.074 1.459.5.5 0 1 0 .968.25C4.65 9.985 5.301 9.5 6 9.5s1.351.483 1.516 1.125a.5.5 0 1 0 .968-.25M12.5 9a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1H12a.5.5 0 0 0 .5-.5m0-2a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1H12a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="identification-card-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgIdentificationCardFill);
const Memo = memo(ForwardRef);
export default Memo;