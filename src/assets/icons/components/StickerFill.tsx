import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStickerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sticker-fill_svg__a)"><path fill="#000" d="M10.5 2h-5A3.504 3.504 0 0 0 2 5.5v5A3.504 3.504 0 0 0 5.5 14h3a.5.5 0 0 0 .158-.026c1.64-.546 4.77-3.677 5.316-5.316A.5.5 0 0 0 14 8.5v-3A3.504 3.504 0 0 0 10.5 2m-2 10.964V11A2.5 2.5 0 0 1 11 8.5h1.964c-.579 1.347-3.117 3.885-4.464 4.464" /></g><defs><clipPath id="sticker-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStickerFill);
const Memo = memo(ForwardRef);
export default Memo;