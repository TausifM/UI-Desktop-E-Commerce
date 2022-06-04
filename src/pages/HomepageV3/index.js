import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV3Page = () => {
  const navigate = useNavigate();

  const handleNavigate6 = () => navigate("/categorieswithsidebar");

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="bg-white_A700 items-center justify-start w-[100%]">
                <Row className="items-center justify-center lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] mb-[35px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[28%]">
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left"
                    onClick={handleNavigate6}
                  >{`Categories`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`New Arrival`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Features`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Collections`}</Text>
                </Row>
                <Image
                  src="img_group19_3.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[124px] xl:ml-[142px] 2xl:ml-[159px] 3xl:ml-[191px] ml-[213px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain w-[2%]"
                  alt="Group19"
                />
                <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elliye`}</Text>
                <Image
                  src="img_icon_6.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[345px] xl:ml-[394px] 2xl:ml-[444px] 3xl:ml-[533px] ml-[592px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain w-[9%]"
                  alt="icon"
                />
              </Row>
              <Line className="bg-gray_50 h-[1px] mx-[auto] w-[85%]" />
            </Column>
            <Row className="bg-white_A700 lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-9 items-center justify-center w-[100%]">
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_sweater_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Sweater"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Jacket`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_tshirt_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Tshirt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Shirt`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_pants_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Pants"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Pants`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_boot_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Boot"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Shoes`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_dress_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Dress"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Dress`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_belt_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Belt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[11px] lg:mx-[6px] xl:mx-[7px] 2xl:mx-[8px] 3xl:mx-[9px] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Accesories`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_skirt_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Skirt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Skirt`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_bra.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Bra"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 3xl:mx-[9px] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Underwear`}</Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Image
                  src="img_dot.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Dot"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`More`}</Text>
              </Column>
            </Row>
          </Column>
        </header>
        <Stack className="lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] w-[100%]">
          <Image
            src="img_placeholder_35.png"
            className="absolute lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] inset-[0] object-cover w-[100%]"
            alt="placeholder"
          />
          <Column className="absolute bg-white_A700_82 inset-[0] items-start justify-center xl:py-[104px] 2xl:py-[117px] 3xl:py-[141px] py-[157px] lg:py-[91px] w-[100%]">
            <Button className="bg-white_A700 font-medium font-poppins lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] 3xl:py-[10px] py-[12.06px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[14%]">{`50% Off Limited Offer`}</Button>
            <Text className="font-bold font-playfairdisplay lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] lg:text-fs42 xl:text-fs48 2xl:text-fs54 3xl:text-fs64 text-fs72 text-gray_800 text-left">{`Summer Collection`}</Text>
            <Text className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[35%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] w-[13%]">
              <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Shop Now`}</Text>
              <Image
                src="img_arrow_6.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Stack>
        <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Featured`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[32%]">
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_rectangle39_8.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="Rectangle39"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Green `}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_rectangle39_9.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="Rectangle39"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Black`}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_placeholder_36.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Black `}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_placeholder_37.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[50%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Black`}
                        <br />
                        {`Brief Case`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
            </Grid>
            <Column className="bg-gray_50 items-center w-[32%]">
              <Image
                src="img_placeholder_38.png"
                className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] object-cover w-[100%]"
                alt="placeholder"
              />
              <Text className="font-medium leading-lh lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] mx-[auto] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 w-[55%]">
                {
                  <>
                    {`Brown `}
                    <br />
                    {`Casual Sneaker`}
                  </>
                }
              </Text>
              <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_500 text-left">{`$299`}</Text>
              <Button className="bg-gray_800 font-bold lg:mb-[32px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] mb-[55px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[38%]">{`Add to Cart`}</Button>
            </Column>
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[32%]">
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_rectangle39_10.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="Rectangle39"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[66%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Blue Grey `}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_rectangle39_11.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="Rectangle39"
                />
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[58%]">
                  <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                    {
                      <>
                        {`Blue Denim `}
                        <br />
                        {`Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="w-[100%]">
                <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]">
                  <Image
                    src="img_placeholder_39.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="placeholder"
                  />
                </Column>
                <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center justify-start xl:mx-[10px] 2xl:mx-[12px] 3xl:mx-[14px] mx-[16px] lg:mx-[9px] w-[76%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Modern Classic`}
                          <br />
                          {`Watch`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column className="w-[100%]">
                <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]">
                  <Image
                    src="img_placeholder_40.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="placeholder"
                  />
                </Column>
                <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center justify-start lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] w-[71%]">
                    <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                      {
                        <>
                          {`Casual `}
                          <br />
                          {`Classic Watch`}
                        </>
                      }
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
                  </Column>
                </Column>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Column className="absolute items-start justify-start left-[2%] top-[8%] w-[13%]">
            <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`New Arrival`}</Text>
            <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[100%]">{`Lorem ipsum dolor sit amet consectetur.`}</Text>
          </Column>
          <Stack className="absolute lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_800 lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] left-[0] w-[24%]"></div>
            <List
              className="absolute lg:gap-[15px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] gap-[26.570007px] grid grid-cols-4 inset-y-[0] min-h-[auto] my-[auto] right-[0] w-[83%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-center justify-center lg:py-[21px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[33px] py-[37.5px] shadow-bs2 w-[100%]">
                <Image
                  src="img_blackbusiness.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="blackbusiness"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Briefcase`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center lg:py-[21px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[33px] py-[37.5px] shadow-bs2 w-[100%]">
                <Image
                  src="img_pink3tz3pbb1.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="pink3TZ3PBB1"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Pink Shirt`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center mb-[1px] shadow-bs2 w-[100%]">
                <Image
                  src="img_graytshirtis.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37.14px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="graytshirtis"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray T-shirt`}</Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37.14px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center mt-[1px] shadow-bs2 w-[100%]">
                <Image
                  src="img_redcheckereds.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37.14px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="redcheckereds"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Red Flannel`}</Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37.14px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </List>
          </Stack>
        </Stack>
        <Row className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[49%]">
            <Image
              src="img_rectangle28.png"
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
              alt="Rectangle28"
            />
            <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[10%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 w-[28%]">
              <span className="text-white_A700 font-poppins">
                <>
                  {`Casual`}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-fs48 font-playfairdisplay font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
          <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]">
            <Image
              src="img_rectangle29.png"
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
              alt="Rectangle29"
            />
            <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[10%] my-[auto] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left text-white_A700 w-[28%]">
              <span className="text-white_A700 font-poppins">
                <>
                  {`Big Vibe `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-fs48 font-playfairdisplay font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
        </Row>
        <Stack className="lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[362px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Stack className="absolute lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[362px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_800 lg:h-[181px] xl:h-[207px] 2xl:h-[232px] 3xl:h-[279px] h-[309px] top-[0] w-[100%]"></div>
            <List
              className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center justify-start shadow-bs3 w-[100%]">
                <Image
                  src="img_truck_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Truck"
                />
                <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Free Delivery`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Image
                  src="img_card_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Card"
                />
                <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Payment Method`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Image
                  src="img_broken_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Broken"
                />
                <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Warranty`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Image
                  src="img_support_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] 3xl:my-[76px] my-[84.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Support"
                />
                <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Customer Support`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
            </List>
          </Stack>
          <Text className="absolute font-bold left-[8%] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700 top-[15%]">{`Why Choose Us`}</Text>
        </Stack>
        <Column className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Popular this Week`}</Text>
            <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`View all`}</Text>
          </Row>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-6 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_41.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Black Adventure`}
                      <br />
                      {`Boots`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_42.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[64%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Black Formal`}
                      <br />
                      {`Highheels`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_43.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[68%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Brown `}
                      <br />
                      {`Casual Shoes`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-start justify-start w-[100%]">
              <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]">
                <Image
                  src="img_placeholder_44.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
              </Column>
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[29px] xl:mx-[33px] 2xl:mx-[37px] 3xl:mx-[45px] mx-[50px] w-[52%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Gray `}
                      <br />
                      {`Longpants`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_45.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[62%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Green`}
                      <br />
                      {`Sport Jacket`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_46.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[58%]">
                <Text className="font-medium leading-lh text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]">
                  {
                    <>
                      {`Blue Denim `}
                      <br />
                      {`Skirt`}
                    </>
                  }
                </Text>
                <RatingBar
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
          </List>
        </Column>
        <Image
          src="img_brand_1.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] object-contain w-[50%]"
          alt="brand"
        />
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[13%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Contacts`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src="img_call_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`+1234567890`}</Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src="img_email_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Social Media`}</Text>
                <Image
                  src="img_sosmedia_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[49%]"
                  alt="sosmedia"
                />
              </Column>
              <Column className="items-start justify-start w-[13%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[47%]">
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Categories`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`New Arrival`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Features`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Collections`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Discount`}</Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Special Offer`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start w-[13%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Company`}</Text>
                <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`About`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Blog`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Careers`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Services`}</Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Privacy Policy`}</Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Terms of service`}</Text>
                </Column>
              </Column>
              <Column className="items-start justify-start mb-[101px] lg:mb-[58px] xl:mb-[67px] 2xl:mb-[75px] 3xl:mb-[90px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[20%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Join our Newsletter`}</Text>
                <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                  <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                    <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 text-bluegray_100 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 tracking-ls1">{`Enter your email`}</Text>
                    <Image
                      src="img_submit_1.svg"
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      alt="submit"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] not-italic text-bluegray_100 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV3Page;
