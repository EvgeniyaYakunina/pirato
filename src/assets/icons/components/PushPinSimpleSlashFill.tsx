import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPushPinSimpleSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#push-pin-simple-slash-fill_svg__a)"><path fill="#000" d="M4.953 2.418A.25.25 0 0 1 5.141 2H12a.5.5 0 0 1 .5.533.51.51 0 0 1-.517.467h-.387l1.323 7.494a.25.25 0 0 1-.293.29.25.25 0 0 1-.138-.078zm8.417 10.746-10-11a.5.5 0 1 0-.74.672L4.14 4.5l-1.06 6H2.5a.5.5 0 0 0 0 1h5V15a.5.5 0 1 0 1 0v-3.5h2.006l2.125 2.336a.5.5 0 1 0 .74-.672z" /></g><defs><clipPath id="push-pin-simple-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPushPinSimpleSlashFill);
const Memo = memo(ForwardRef);
export default Memo;