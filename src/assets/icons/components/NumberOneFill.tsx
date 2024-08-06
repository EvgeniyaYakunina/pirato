import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberOneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-one-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M9 11.5a.5.5 0 0 1-1 0V5.309l-1.276.638a.5.5 0 0 1-.448-.894l2-1A.5.5 0 0 1 9 4.5z" /></g><defs><clipPath id="number-one-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberOneFill);
const Memo = memo(ForwardRef);
export default Memo;