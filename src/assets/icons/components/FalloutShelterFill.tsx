import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFalloutShelterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fallout-shelter-fill_svg__a)"><path fill="#000" d="M14.496 7.784c-.11-3.405-2.875-6.17-6.28-6.28a6.506 6.506 0 0 0-6.712 6.712c.11 3.405 2.875 6.17 6.28 6.28a6.507 6.507 0 0 0 6.712-6.712M12.4 8.842l-1.466 2.052a.53.53 0 0 1-.866 0L8 8l-2.067 2.894a.532.532 0 0 1-.866 0L3.601 8.842A.532.532 0 0 1 4.034 8H8L6.101 5.342a.532.532 0 0 1 .433-.842h2.932a.532.532 0 0 1 .433.842L8 8h3.966a.533.533 0 0 1 .433.842" /></g><defs><clipPath id="fallout-shelter-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFalloutShelterFill);
const Memo = memo(ForwardRef);
export default Memo;