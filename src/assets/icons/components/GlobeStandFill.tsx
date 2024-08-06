import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGlobeStandFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#globe-stand-fill_svg__a)"><path fill="#000" d="M3.5 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0m9.154 4.33A6 6 0 0 1 4.17 2.346a.5.5 0 1 0-.721-.693 7 7 0 0 0 4.55 11.829V14.5H6.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1H9v-1.018a6.95 6.95 0 0 0 4.347-1.931.5.5 0 1 0-.692-.721" /></g><defs><clipPath id="globe-stand-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGlobeStandFill);
const Memo = memo(ForwardRef);
export default Memo;