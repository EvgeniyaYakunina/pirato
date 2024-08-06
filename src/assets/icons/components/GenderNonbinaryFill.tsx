import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGenderNonbinaryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gender-nonbinary-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M8 13a3.25 3.25 0 0 1-.5-6.461v-1.3l-1.812.725a.5.5 0 0 1-.375-.928l1.34-.536-1.34-.536a.5.5 0 0 1 .375-.928L8 3.96l2.313-.925a.5.5 0 0 1 .374.928l-1.34.536 1.34.536a.5.5 0 1 1-.374.928L8.5 5.24v1.3A3.25 3.25 0 0 1 8 13m2.25-3.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" /></g><defs><clipPath id="gender-nonbinary-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGenderNonbinaryFill);
const Memo = memo(ForwardRef);
export default Memo;