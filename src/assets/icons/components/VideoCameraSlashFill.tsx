import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoCameraSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#video-camera-slash-fill_svg__a)"><path fill="#000" d="M16 5.014v5.966a.52.52 0 0 1-.241.448.5.5 0 0 1-.537-.012l-2.11-1.407A.25.25 0 0 1 13 9.8V6.199a.25.25 0 0 1 .111-.207l2.111-1.408a.5.5 0 0 1 .778.43M3.37 2.164a.5.5 0 1 0-.74.672l.603.664H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9.415l1.215 1.336a.499.499 0 1 0 .74-.672zm8.192 7.528A.25.25 0 0 0 12 9.523V4.5a1 1 0 0 0-1-1H6.5a.25.25 0 0 0-.187.418z" /></g><defs><clipPath id="video-camera-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVideoCameraSlashFill);
const Memo = memo(ForwardRef);
export default Memo;