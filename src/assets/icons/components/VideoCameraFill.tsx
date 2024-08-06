import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoCameraFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#video-camera-fill_svg__a)"><path fill="#000" d="M12 4.5v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m3.625.016a.51.51 0 0 0-.414.076l-2.1 1.4a.25.25 0 0 0-.111.207v3.602a.25.25 0 0 0 .111.208l2.111 1.407a.5.5 0 0 0 .537.012.52.52 0 0 0 .241-.448V5a.5.5 0 0 0-.375-.484" /></g><defs><clipPath id="video-camera-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVideoCameraFill);
const Memo = memo(ForwardRef);
export default Memo;