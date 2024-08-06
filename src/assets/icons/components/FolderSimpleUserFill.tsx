import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSimpleUserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-simple-user-fill_svg__a)"><path fill="#000" d="M14.483 13.871A.5.5 0 0 1 14 14.5h-4a.5.5 0 0 1-.483-.625 2.5 2.5 0 0 1 1.07-1.458 2 2 0 1 1 2.827 0 2.5 2.5 0 0 1 1.07 1.454M13.5 4.5H8.167L6.433 3.2c-.173-.13-.384-.2-.6-.2H2.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h5a.5.5 0 0 0 0-1h-5V4h3.333l1.734 1.3c.173.13.384.2.6.2H13.5v2a.5.5 0 0 0 1 0v-2a1 1 0 0 0-1-1" /></g><defs><clipPath id="folder-simple-user-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderSimpleUserFill);
const Memo = memo(ForwardRef);
export default Memo;