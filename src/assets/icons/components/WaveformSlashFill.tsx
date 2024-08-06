import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaveformSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#waveform-slash-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-2 3.5a.5.5 0 0 1 1 0v3.172a.5.5 0 0 1-1 0zm-2 .5a.5.5 0 1 1 1 0v.672a.5.5 0 0 1-1 0zm-5 3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0zm7.854 2.854a.503.503 0 0 1-.708 0L8.5 9.207V10.5a.5.5 0 0 1-1 0V8.207l-1-1V11.5a.5.5 0 0 1-1 0V6.207L3.646 4.355a.5.5 0 1 1 .708-.708l8 8a.503.503 0 0 1 0 .708" /></g><defs><clipPath id="waveform-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWaveformSlashFill);
const Memo = memo(ForwardRef);
export default Memo;