import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileAudioFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-audio-fill_svg__a)"><path fill="#000" d="M9.5 11.25a2.53 2.53 0 0 1-1.25 2.182.5.5 0 0 1-.5-.864 1.53 1.53 0 0 0 0-2.636.5.5 0 0 1 .5-.864A2.53 2.53 0 0 1 9.5 11.25M6.191 8.038a.5.5 0 0 0-.545.108L4.293 9.5H3a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h1.293l1.353 1.354A.5.5 0 0 0 6.5 14V8.5a.5.5 0 0 0-.309-.462M13.5 5.5v8a1 1 0 0 1-1 1h-2a.5.5 0 0 1 0-1h2V6h-3a.5.5 0 0 1-.5-.5v-3H3.5v5a.5.5 0 1 1-1 0v-5a1 1 0 0 1 1-1h6a.5.5 0 0 1 .354.146l3.5 3.5a.5.5 0 0 1 .146.354M10 5h1.793L10 3.207z" /></g><defs><clipPath id="file-audio-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileAudioFill);
const Memo = memo(ForwardRef);
export default Memo;