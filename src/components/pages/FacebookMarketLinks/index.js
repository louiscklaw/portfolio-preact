import { Component } from 'preact';
import { useContext } from 'preact/hooks';

import { Theme } from '../../../context/index'
import theme_setting from '../../../style/theme'
import { NewWindowLink } from '../..';

// import theme from '../../../style/theme'

function getFacebookMarketLink(item_name){
  return (
    <div>
      <NewWindowLink link={`https://www.facebook.com/marketplace/hongkong/search/?query=${item_name}&vertical=C2C&sort=CREATION_TIME_DESCEND`} text={'facebook selling: '+item_name}/>
      <br />
    </div>
  )
}

export default class About extends Component {
	render(){
    const theme = useContext(Theme);
    const is_mobile = theme.isMobile;

    const style={
      page: {
        display: 'flex',
        flexFlow: 'column',
        flexWrap: 'nowrap',

        padding: is_mobile? '1em 1em' :'5em 10em',
        // paddingLeft: '10em',
        // paddingRight: '10em',
        // paddingTop: '5em',
        // paddingBottom: '10em'
      }
    }


    return(
      <div style={style.page}>
        facebook market links helloworld
        {getFacebookMarketLink('dell')}
        {getFacebookMarketLink('lenovo')}
        {getFacebookMarketLink('3d%20printer%20打%E2%80%8B印')}
        {getFacebookMarketLink('android')}
        {getFacebookMarketLink('火牛%20電源')}
        {getFacebookMarketLink('itx%20sfx')}
        {getFacebookMarketLink('nas')}
        {getFacebookMarketLink('顯示屏')}
        {getFacebookMarketLink('olympus')}
        {getFacebookMarketLink('netbook')}

      </div>
		)
	}
}
