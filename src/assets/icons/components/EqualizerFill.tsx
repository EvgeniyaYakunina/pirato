import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEqualizerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#equalizer-fill_svg__a)"><path fill="#000" d="M5 6a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1h3A.5.5 0 0 1 5 6m4.5 1.5h-3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1m2-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m-7 3h-3A.5.5 0 0 0 1 8v4a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 5 12V8a.5.5 0 0 0-.5-.5m10-2h-3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5m-5 4h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="equalizer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEqualizerFill);
const Memo = memo(ForwardRef);
export default Memo;