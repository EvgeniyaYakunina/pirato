import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-open-fill_svg__a)"><path fill="#000" d="M15.313 6.915A1 1 0 0 0 14.5 6.5h-1v-1a1 1 0 0 0-1-1H8.167L6.434 3.2c-.174-.13-.384-.2-.6-.2H2.5a1 1 0 0 0-1 1v9a.5.5 0 0 0 .5.5h11.194a.5.5 0 0 0 .474-.342l1.78-5.342a1 1 0 0 0-.136-.901M5.833 4 7.7 5.4a.5.5 0 0 0 .3.1h4.5v1H4.36a1 1 0 0 0-.948.684L2.5 9.919V4z" /></g><defs><clipPath id="folder-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderOpenFill);
const Memo = memo(ForwardRef);
export default Memo;