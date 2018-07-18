<template>
<div class="page">
  <div class="wto-page" style="padding-top:1rem;">
    <el-row  class="wto-title  hidden-xs-only">
      <el-col>
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <div class="info-title" style="padding-bottom: 0.4rem">
              <h2 :style="{'lineHeight': $i18n.locale === 'zh'? '60px': '48px'}">{{$t('m.wto.title')}} <span style="">{{$t('m.wto.token')}}</span></h2>
              <p>{{$t('m.wto.navTitle')}}</p>
              <el-tooltip placement="top">
                <div slot="content">
                  <div class="hover-container">
                    <div class="hc-img" style="height:184px;width:184px;padding:18px; float: left" >
                      <img style="height:184px;width: 184px;" src="../../assets/imgs/QR.png" alt="">
                    </div>
                    <div class="hc-info" style="float: left;font-size: 16px;width:186px;height:184px; line-height: 184px;">
                      <div style="padding-top: 80px">
                        <p style="word-wrap:break-word;line-height: 28px;">{{$t('m.wto.whitepaperInfo')}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Whitepaper-btn" style="margin-top:0.4rem;width:2rem;height:0.5rem;line-height:0.5rem;font-size:16px;color: #fff;text-align: center;background-color: #4f73f;box-shadow: 0px 0.04rem 0.22rem 0px rgba(124, 173, 255, 0.16);border-radius:0.04rem;">{{$t('m.wto.whitepaper')}}</div>
              </el-tooltip>
            </div>
            <div class="info-right-img" style="position:absolute;right: 0;top: 0;z-index: -1;width: 5.2rem;">
              <img style="width: 100%" src="./../../../static/img/wto/w1.jpg" alt="widdle">
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row  class="wto-phone-title hidden-sm-and-up">
      <el-col>
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <div class="info-title">
              <h2>{{$t('m.wto.title')}}</h2>
              <p ><span>{{$t('m.wto.token')}}</span> {{$t('m.wto.navTitle')}} </p>
              <div class="Whitepaper-btn" @click="navigationTo">{{$t('m.wto.whitepaper')}}</div>
            </div>
            <div class="info-right-img">
              <img src="./../../../static/img/wto/w1.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="wto-nav-item hidden-xs-only" style="padding:0.6rem 0 0.4rem;position:relative;top:0.3rem">
      <h4>{{$t('m.wto.subTitle1')}}</h4>
      <div>{{$t('m.wto.twoTitle1')}}</div>
    </el-row>
    <el-row class="wto-phone-nav-item hidden-sm-and-up">
      <h4>{{$t('m.wto.subTitle1')}}</h4>
      <div>{{$t('m.wto.twoTitle1')}}</div>
    </el-row>
    <el-row  class="list-container">
      <el-col :xs="12" :sm="6" >
        <div >
          <img src="./../../../static/img/wto/list1.png" alt="">
          <p>{{$t('m.wto.advantageItem1')}}</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" >
        <div >
          <img src="./../../../static/img/wto/list2.png" alt="">
          <p>{{$t('m.wto.advantageItem2')}}</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" >
        <div >
          <img src="./../../../static/img/wto/list3.png" alt="">
          <p>{{$t('m.wto.advantageItem3')}}</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" >
        <div>
          <img src="./../../../static/img/wto/list4.png" alt="">
          <p>{{$t('m.wto.advantageItem4')}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="wto-nav-item hidden-xs-only"  style="padding:0.6rem 0 0.4rem;">
      <h4>{{$t('m.wto.subTitle2')}}</h4>
    </el-row>
    <el-row class="wto-phone-nav-item hidden-sm-and-up" style="padding:1.6rem 0 0.4rem;">
      <h4>{{$t('m.wto.subTitle2')}}</h4>
    </el-row>
    <el-row  class="show">
      <el-col :xs="24" :sm="10"  class="fl" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{$t('m.wto.technologyTitle1')}}</h2>
            <p>{{$t('m.wto.technologyContent1')}}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fr">
        <div class="grid-content bg-purple">
          <img src="./../../../static/img/wto/info1.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show">
      <el-col :xs="24" :sm="10"  class="fr" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{$t('m.wto.technologyTitle2')}}</h2>
            <p>{{$t('m.wto.technologyContent2')}}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fl">
        <div class="grid-content bg-purple">
          <img src="./../../../static/img/wto/info2.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show">
      <el-col :xs="24" :sm="10"  class="fl" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{$t('m.wto.technologyTitle3')}}</h2>
            <p>{{$t('m.wto.technologyContent3')}}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fr">
        <div class="grid-content bg-purple">
          <img src="./../../../static/img/wto/info3.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show">
      <el-col :xs="24" :sm="10"  class="fr" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{$t('m.wto.technologyTitle4')}}</h2>
            <p>{{$t('m.wto.technologyContent4')}}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fl">
        <div class="grid-content bg-purple">
          <img src="./../../../static/img/wto/info4.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row class="wto-nav-item hidden-xs-only"  style="padding:0.6rem 0 0.4rem;">
      <h4>{{$t('m.wto.subTitle3')}}</h4>
    </el-row>
    <el-row class="wto-phone-nav-item hidden-sm-and-up" >
      <h4>{{$t('m.wto.subTitle3')}}</h4>
    </el-row>
    <el-row class="year-line hidden-xs-only" style="padding:0.2rem 0 0 0;padding-left:50%;position: relative;">
      <div class="line-item" >
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div>
      <div class="line-item">
        <div class="line" style="width:0.02rem;height:1.5rem;background-color:#b7b5c1;margin-left:0.0301rem;"></div>
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div>
      <div class="line-item">
        <div class="line" style="width:0.02rem;height:1.5rem;background-color:#b7b5c1;margin-left:0.0301rem;"></div>
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div>
      <div class="line-item">
        <div class="line" style="width:0.02rem;height:1.5rem;background-color:#b7b5c1;margin-left:0.0301rem;"></div>
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div><div class="line-item">
        <div class="line" style="width:0.02rem;height:1.5rem;background-color:#b7b5c1;margin-left:0.0301rem;"></div>
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div>
      <div class="line-item">
        <div class="line" style="width:0.02rem;height:1.5rem;background-color:#b7b5c1;margin-left:0.0301rem;"></div>
        <div class="line-circle" style="height:0.08rem;width:0.08rem;border-radius:0.08rem;background-color:#b7b5c1;"></div>
      </div>
      <div class="year y1" style="position:absolute;width:2rem;top:0.3rem;left:4.5rem;">
        <h1>{{$t('m.wto.year1')}}</h1>
        <p>{{$t('m.wto.MonthDay1')}}</p>
      </div>
      <div class="year y2" style="position:absolute;width:2rem;top:1.86rem;left:3.2rem;">
        <h1>{{$t('m.wto.year2')}}</h1>
        <p>{{$t('m.wto.MonthDay2')}}</p>
      </div>
      <div class="year y3" style="position:absolute;width:2rem;top:3.44rem;left:4.5rem;">
        <h1>{{$t('m.wto.year3')}}</h1>
        <p>{{$t('m.wto.MonthDay3')}}</p>
      </div>
      <div class="year y4" style="position:absolute;width:2rem;top:5rem;left:32.rem;">
        <h1>{{$t('m.wto.year4')}}</h1>
        <p>{{$t('m.wto.MonthDay4')}}</p>
      </div>
      <div class="year y5" style="position:absolute;width:2rem;top:6.62rem;left:4.5rem;">
        <h1>{{$t('m.wto.year5')}}</h1>
        <p>{{$t('m.wto.MonthDay5')}}</p>
      </div>
      <p class="year-info-detail d1" style="position:absolute;top:0.3rem;left:0;width:3.64rem;color:#878996;font-size:0.14rem;line-height: 2em;">
        {{$t('m.wto.yearInfo1')}}
      </p>
      <p class="year-info-detail d2" style="position:absolute;top:1.86rem;right:0;width:3.64rem;color:#878996;font-size:0.14rem;line-height: 2em;">
        {{$t('m.wto.yearInfo2')}}
      </p>
      <p class="year-info-detail d3" style="position:absolute;top:3.44rem;left:0;width:3.64rem;color:#878996;font-size:0.14rem;line-height: 2em;">
        {{$t('m.wto.yearInfo3')}}
      </p>
      <p class="year-info-detail d4" style="position:absolute;top:5rem;right:0;width:3.64rem;color:#878996;font-size:0.14rem;line-height: 2em;">
        {{$t('m.wto.yearInfo4')}}
      </p>
      <p class="year-info-detail d5" style="position:absolute;top:6.62rem;left:0;width:3.64rem;color:#878996;font-size:0.14rem;line-height: 2em;">
       {{$t('m.wto.yearInfo5')}}
      </p>
    </el-row>
    <el-row class="phone-year-line hidden-sm-and-up">
      <div class="line-item">
        <div class="line-circle"></div>
      </div>
      <div class="line-item">
        <div class="line"></div>
        <div class="line-circle"></div>
      </div>
      <div class="line-item">
        <div class="line"></div>
        <div class="line-circle"></div>
      </div>
      <div class="line-item">
        <div class="line"></div>
        <div class="line-circle"></div>
      </div><div class="line-item">
        <div class="line"></div>
        <div class="line-circle"></div>
      </div>
      <div class="line-item">
        <div class="line"></div>
        <div class="line-circle active"></div>
      </div>
      <div class="year y1">
        <h1>{{$t('m.wto.year1')}}</h1>
        <p>{{$t('m.wto.MonthDay1')}}</p>
      </div>
      <div class="year y2">
        <h1>{{$t('m.wto.year2')}}</h1>
        <p>{{$t('m.wto.MonthDay2')}}</p>
      </div>
      <div class="year y3">
        <h1>{{$t('m.wto.year3')}}</h1>
        <p>{{$t('m.wto.MonthDay3')}}</p>
      </div>
      <div class="year y4">
        <h1>{{$t('m.wto.year4')}}</h1>
        <p>{{$t('m.wto.MonthDay4')}}</p>
      </div>
      <div class="year y5">
        <h1>{{$t('m.wto.year5')}}</h1>
        <p>{{$t('m.wto.MonthDay5')}}</p>
      </div>
      <p class="year-info-detail d1">
        {{$t('m.wto.yearInfo1')}}
      </p>
      <p class="year-info-detail d2">
        {{$t('m.wto.yearInfo2')}}
      </p>
      <p class="year-info-detail d3">
        {{$t('m.wto.yearInfo3')}}
      </p>
      <p class="year-info-detail d4">
        {{$t('m.wto.yearInfo4')}}
      </p>
      <p class="year-info-detail d5">
       {{$t('m.wto.yearInfo5')}}
      </p>
    </el-row>
    <el-row class="wto-nav-item hidden-xs-only"  style="padding:0.6rem 0 0.4rem;">
      <h4>{{$t('m.wto.team')}}</h4>
      <div>{{$t('m.wto.teamInfo')}}</div>
    </el-row>
    <el-row class="wto-phone-nav-item hidden-sm-and-up" >
      <h4>{{$t('m.wto.team')}}</h4>
      <div style="line-height: 1.5;
    padding-bottom: 1rem;">{{$t('m.wto.teamInfo')}}</div>
    </el-row>
    <el-row class="Advisors-list-container">
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/Kevin.png" alt="">
          <div >
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem1')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position1')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/Willam.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem2')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position2')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/zengyi.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem3')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position3')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/wangcuicui.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem4')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position4')}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="Advisors-list-container">
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/Vera.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem5')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position5')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/Adam.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem6')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position6')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/luca.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem7')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position7')}}</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.4rem 0.4rem;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/man/Bohda.png" alt="">
          <div>
            <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">{{$t('m.wto.teamItem8')}}</h5>
            <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">{{$t('m.wto.position8')}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="10" class="man-list-container hidden-xs-only">
      <el-col :xs="24" :sm="12" >
        <el-row   style="padding: 0.2rem; margin-top: 0.6rem;background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);" >
          <el-col :span="8" style="padding-right: 0.2rem">
            <img src="./../../../static/img/wto/info4.png" alt="">
          </el-col>
          <el-col :span="16" class="man-item">
            <h3>Kevin Wen</h3>
            <p class="profession">Founder and CEO</p>
            <p class="information">works for Huawei and Harbour Network 6 years,China first 10G Ethernet Switch developer.</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" >
        <el-row style="padding: 0.2rem; margin-top: 0.6rem; background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);">
          <el-col :span="8" style="padding-right: 0.2rem; ">
            <img src="./../../../static/img/wto/info4.png" alt="">
          </el-col>
          <el-col :span="16" class="man-item">
            <h3>Kevin Wen</h3>
            <p class="profession">Founder and CEO</p>
            <p class="information">works for Huawei and Harbour Network 6 years,China first 10G Ethernet Switch developer.</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row> -->
    <!-- <el-row :gutter="10" class="phone-man-list-container hidden-sm-and-up">
      <el-col :xs="24" :sm="12" >
        <el-row   style="padding: 0.2rem; margin-top: 0.6rem;background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);" >
          <el-col :span="8" style="padding-right: 0.2rem">
            <img src="./../../../static/img/wto/info4.png" alt="">
          </el-col>
          <el-col :span="16" class="man-item">
            <h3>Kevin Wen</h3>
            <p class="profession">Founder and CEO</p>
            <p class="information">works for Huawei and Harbour Network 6 years,China first 10G Ethernet Switch developer.</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" >
        <el-row style="padding: 0.2rem; margin-top: 0.6rem; background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);">
          <el-col :span="8" style="padding-right: 0.2rem; ">
            <img src="./../../../static/img/wto/info4.png" alt="">
          </el-col>
          <el-col :span="16" class="man-item">
            <h3>Kevin Wen</h3>
            <p class="profession">Founder and CEO</p>
            <p class="information">works for Huawei and Harbour Network 6 years,China first 10G Ethernet Switch developer.</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row> -->
    <el-row class="wto-nav-item none"  style="padding:0.6rem 0 0.4rem;">
      <h4>Advisors</h4>
      <div>Blockchain Technology</div>
    </el-row>
     <el-row class="Advisors-list-container none">
      <el-col :xs="12" :sm="6" style="padding: 0 0.4rem 0.5rem 0;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/wto/info3.png" alt="">
          <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">Changfeng Wang</h5>
          <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">Advisor of WTO Chain and Token Platform</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.1rem 0.5rem 0;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/wto/info3.png" alt="">
          <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">Changfeng Wang</h5>
          <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">Advisor of WTO Chain and Token Platform</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.1rem 0.5rem 0;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/wto/info3.png" alt="">
          <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">Changfeng Wang</h5>
          <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">Advisor of WTO Chain and Token Platform</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" style="padding: 0 0.1rem 0.5rem 0;">
        <div style="padding: 0.14rem;  background-color: #ffffff;box-shadow: 0px 2px 40px 0px rgba(124, 173, 255, 0.1);border-radius: 4px;">
          <img src="./../../../static/img/wto/info3.png" alt="">
          <h5 style="font-size: 16px;color: #000735; padding:0.06rem;font-weight: 600">Changfeng Wang</h5>
          <p style="color: #aab0ba;font-size: 12px; padding:0.04rem">Advisor of WTO Chain and Token Platform</p>
        </div>
      </el-col>
    </el-row>
    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
import Vfooter from '@/components/v-footer.vue'
export default {
  name: 'home',
  components: {
    'v-footer': Vfooter
  },
  // 跳转qr
  methods: {
    navigationTo () {
      this.$router.push('/qr')
    }
  }
}
</script>

<style lang="stylus">
  .wto-page
    color #000735
    width 80%
    margin 0 auto
    .fr
      float right
    .fl
      float left
    img
      width 100%
    .home-page-title
      text-align center
      h1
        font-size 36px
        line-height 50px
        font-weight 900
      p
        font-size 0.3rem
    .phone-load-container
      user-select none
      padding-top 0.54rem
      text-align center
    .load-btn
      cursor pointer
      display inline-block
      width 2rem
      height 0.5rem
      line-height 0.5rem
      background-color #4f73f6
      box-shadow 0px 0.04px 0.21px 0px rgba(124, 173, 255, 0.16)
      border-radius 0.04rem
      &.android-load
        margin-right 0.4rem
      img
        display inline-block
        height 0.26rem
        width 0.22rem
        padding 0.11rem 0.1rem 0 0
        vertical-align top
      span
        font-size 0.16rem
        color #fff
    .phone-load-btn
      display inline-block
      width 4.8rem
      height 1.6rem
      line-height 1.6rem
      background-color #4f73f6
      box-shadow 0px 0.08rem 0.42rem 0px rgba(124, 173, 255, 0.16)
      border-radius 0.08rem
      &.android-load
        margin-right 0.4rem
      img
        display inline-block
        height 0.52rem
        width 0.44rem
        padding 0.22rem 0.2rem 0 0
        vertical-align top
      span
        font-size 0.32rem
        color #fff
    .top-cneter-picture
      padding-bottom 0.9rem
    .show
      h2
        font-size 20px
        line-height 30px
        padding 1rem 0 0.3rem 0
        color #000735
      p
        font-size 16px
        line-height 30px
        color #878996
    .wto-title
      position relative
      .info-right-img
        position absolute
        right 0
        top 0
        z-index -1
        width 5.2rem
    .info-title
      h2
        line-height 48px
        font-size 32px
        span
          color #3f95f7
      p
        font-size 24px
      .Whitepaper-btn
        margin-top 0.4rem
        width 2rem
        height 0.5rem
        line-height 0.5rem
        font-size 16px
        color #fff
        text-align center
        background-color #4f73f6
        box-shadow 0px 0.04rem 0.22rem 0px rgba(124, 173, 255, 0.16)
        border-radius 0.04rem
    .wto-nav-item
      padding 0.6rem 0 0.4rem
      h4
        font-size 32px
        color #4f73f6
        padding 0.24rem 0
        text-align center
      div
        color #000735
        padding 0.05rem 0
        font-size 18px
        text-align center
      p
        font-size 16px
        text-align center
        padding 0.08rem 0
        color #878996
    .wto-phone-nav-item
      h4
        font-size 28px
        color #4f73f6
        padding-top 2rem
        text-align center
        line-height 1.2
      div
        color #000735
        padding 0.05rem 0
        font-size 18px
        text-align center
      p
        font-size 14px
        text-align center
        padding 0.08rem 0
        color #878996
    .list-container
      p
        text-align center
        font-weight 900
        height 0.5rem
    .wto-phone-title
      padding-bottom 0.8rem
      .info-right-img
        width 100%
        padding-bottom 0.2rem
      h2
        line-height 40px
        font-size 22px
      p
        font-size 16px
        span
          color #3f95f7
      .Whitepaper-btn
        margin 0.8rem auto
        width 4.8rem
        height 1.6rem
        line-height 1.6rem
        font-size 0.5rem
        color #ffffff
        text-align center
        background-color #4f73f6
        box-shadow 0px 0.08rem 0.44rem 0px rgba(124, 173, 255, 0.16);
        border-radius 0.08rem
    .man-list-container
      padding-bottom 0.54rem
      .man-item
        h3
          font-size 0.2rem
          font-weight 600
          padding 0.02rem 0
          color #000735
        .profession
          font-size 0.18rem
          color #878996
        .information
          padding-top 0.08rem
          font-size 0.16rem
          color #bfc5d0
    .phone-man-list-container
      padding-bottom 0.54rem
      .man-item
        h3
          font-size 16px
          font-weight 600
          padding 0.02rem 0
          color #000735
        .profession
          font-size 14px
          color #878996
        .information
          padding-top 8px
          font-size 12px
          color #bfc5d0
    .year-line
      padding-top 0.2rem
      padding-left 50%
      position relative
      .line-item
        .line-circle
          height 0.08rem
          width 0.08rem
          border-radius 0.08rem
          background-color #b7b5c1
        .line
          width 0.02rem
          height 1.5rem
          background-color #b7b5c1
          margin-left 0.0301rem
      .year
        position absolute
        width 2rem
        top 0.3rem
        left 4.5rem
        h1
          font-size 0.18rem
          text-align center
        p
          font-size 0.14rem
          text-align center
        &.y2
          top 1.86rem
          left 3.2rem
        &.y3
          top 3.44rem
          left 4.5rem
        &.y4
          top 5rem
          left 3.2rem
        &.y5
          top 6.62rem
          left 4.5rem
      .year-info-detail
        top 0.3rem
        position absolute
        width 3.64rem
        color #878996
        font-size 0.14rem
        &.d1
          left 0
        &.d2
          top 1.86rem
          right 0
        &.d3
          top 3.44rem
          left 0
        &.d4
          top 5rem
          right 0
        &.d5
          top 6.62rem
          left 0
    .phone-year-line
      padding 1.4rem 0 0.4rem
      padding-left 8%
      position relative
      .line-item
        .line-circle
          height 0.08rem
          width 0.08rem
          border-radius 0.08rem
          background-color #b7b5c1
          margin-top 0.8rem
          &.active
            margin-top 0
        .line
          width 0.02rem
          height 2rem
          background-color #b7b5c1
          margin-left 0.03rem
      .year
        position absolute
        top 1.2rem
        left -6%
        text-align center
        width 3rem
        h1
          font-size 12px
          text-align center
        p
          font-size 10px
          text-align center
          line-height 2rem
        &.y2
          top 4.3rem
        &.y3
          top 7.2rem
        &.y4
          top 10.1rem
        &.y5
          top 13rem
      .year-info-detail
        top 0.3rem
        position absolute
        width 66%
        color #878996
        font-size 14px
        right 0
        &.d1
          top 1.2rem
        &.d2
          top 4.3rem
        &.d3
          top 7.2rem
        &.d4
          top 10.1rem
        &.d5
          top 13rem
</style>
