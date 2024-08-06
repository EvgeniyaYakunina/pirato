import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPictureInPictureFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#picture-in-picture-fill_svg__a)"><path fill="#000" d="M13.5 3h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 9h-5V8h5z" /></g><defs><clipPath id="picture-in-picture-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPictureInPictureFill);
const Memo = memo(ForwardRef);
export default Memo;