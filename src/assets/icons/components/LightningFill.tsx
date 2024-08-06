import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightningFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lightning-fill_svg__a)"><path fill="#000" d="m13.366 7.841-7 7.5a.5.5 0 0 1-.856-.437l.916-4.583-3.602-1.353a.5.5 0 0 1-.187-.812l7-7.5a.5.5 0 0 1 .855.437l-.918 4.588 3.602 1.35a.5.5 0 0 1 .187.81z" /></g><defs><clipPath id="lightning-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLightningFill);
const Memo = memo(ForwardRef);
export default Memo;