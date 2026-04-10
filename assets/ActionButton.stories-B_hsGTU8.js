import{l as e}from"./iframe-DFAviyCv.js";import{t}from"./react-BXYgB72D.js";import{t as n}from"./jsx-runtime-BWaIa8Ji.js";import{expect as r,fn as i,userEvent as a,within as o}from"./dist-Bby2ZGwZ.js";import{d as s,n as c,t as l}from"./theme-CkdUnjX9.js";import{t as u}from"./ArrowForward-uBtH9t_k.js";var d=e(t(),1),f=n(),p=s((0,f.jsx)(`path`,{d:`M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14`}),`Search`),m=({label:e,variant:t=`primary`,icon:n=(0,f.jsx)(u,{sx:{fontSize:20}}),fullWidth:r=!1,onClick:i})=>{let a=t===`primary`;return(0,f.jsxs)(c.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:i,style:{background:a?l.purple:`transparent`,border:a?`none`:`2px solid ${l.purple}`,padding:`12px 32px`,borderRadius:`40px`,fontWeight:700,color:a?l.cream:l.purple,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`,fontSize:`1rem`,width:r?`100%`:`auto`,transition:`all 0.2s ease`,fontFamily:`inherit`},children:[e,` `,n]})};m.__docgenInfo={description:``,methods:[],displayName:`ActionButton`,props:{label:{required:!0,tsType:{name:`string`},description:`The text displayed inside the button`},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'outline'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'outline'`}]},description:`Main visual style or outline only`,defaultValue:{value:`'primary'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon (arrow by default)`,defaultValue:{value:`<ArrowForwardIcon sx={{ fontSize: 20 }} />`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether it should take up the full width of the container`,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Function executed when clicked`}}};var h={title:`Atoms/ActionButton`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:i()},argTypes:{variant:{control:{type:`select`},options:[`primary`,`outline`]}}},g={args:{label:`Explore more`,variant:`primary`},play:async({canvasElement:e,args:t})=>{let n=o(e),i=n.getByRole(`button`);await r(n.getByText(`Explore more`)).toBeInTheDocument(),await a.click(i),await r(t.onClick).toHaveBeenCalled()}},_={args:{label:`Search projects`,variant:`primary`,icon:d.createElement(p,{"data-testid":`custom-icon`,sx:{fontSize:20}})},play:async({canvasElement:e})=>{await r(o(e).getByTestId(`custom-icon`)).toBeInTheDocument()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Explore more',
    variant: 'primary'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(canvas.getByText('Explore more')).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search projects',
    variant: 'primary',
    icon: React.createElement(SearchIcon, {
      ...({
        "data-testid": "custom-icon"
      } as React.HTMLAttributes<HTMLOrSVGElement>),
      sx: {
        fontSize: 20
      }
    } as SvgIconProps)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('custom-icon')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}};var v=[`Primary`,`CustomIcon`];export{_ as CustomIcon,g as Primary,v as __namedExportsOrder,h as default};