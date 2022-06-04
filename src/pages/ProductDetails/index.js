import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  const handleNavigate8 = () => navigate("/cart");

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <Row className="items-center justify-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30px] w-[6%]">
              <Image
                src="img_group19_8.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                alt="Group19"
              />
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Elliye`}</Text>
            </Row>
            <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[31%]">
              <Text className="cursor-pointer hover:font-normal font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic opacity-op5 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 hover:text-gray_800">{`Search here`}</Text>
              <Image
                src="img_button_3.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="button"
              />
            </Row>
            <Image
              src="img_icon_9.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain w-[4%]"
              alt="icon"
            />
            <Button className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-white_A700 w-[6%]">{`Login`}</Button>
          </Row>
        </header>
        <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]">
          <Column className="items-center lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] w-[49%]">
            <Image
              src="img_placeholder_67.png"
              className="lg:h-[306px] xl:h-[349px] 2xl:h-[393px] 3xl:h-[471px] h-[523px] object-cover w-[100%]"
              alt="placeholder"
            />
            <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[60%]">
              <Image
                src="img_placeholder_68.png"
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                alt="placeholder"
              />
              <Image
                src="img_placeholder_69.png"
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                alt="placeholder"
              />
              <Image
                src="img_placeholder_70.png"
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                alt="placeholder"
              />
            </Row>
          </Column>
          <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]">
            <Column className="w-[100%]">
              <Column className="items-start justify-start w-[100%]">
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[39%]">
                  <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Featured`}</Text>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-bluegray_100 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`>`}</Text>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Purple Warm Jacket`}</Text>
                </Row>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-bold leading-lh mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[49%]">
                      {
                        <>
                          {`Purple Warm `}
                          <br />
                          {`Zip Jacket`}
                        </>
                      }
                    </Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_500 text-left">{`$299`}</Text>
                        <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                          <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                    <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[34%]">
              <Text className="font-medium mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left">{`Quantity`}</Text>
              <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] w-[62%]">
                <Image
                  src="img_increase.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="increase"
                />
                <Image
                  src="img_decrease.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="decrease"
                />
                <Button className="absolute border border-bluegray_100 border-solid font-medium inset-[0] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[100%]">{`1`}</Button>
              </Stack>
            </Row>
            <div className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[31%] xl:mr-[6px] xl:mt-[37px] input-wrap">
              <Image
                src="img_vector.svg"
                className="absolute right-[50.829956px] lg:right-[29px] xl:right-[33px] 2xl:right-[38px] 3xl:right-[45px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Button
                className="common-pointer bg-gray_800 font-bold lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] 2xl:pr-[112px] 3xl:pr-[134px] pr-[149.65995599999994px] lg:pr-[87px] xl:pr-[99px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.045px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[100%]"
                onClick={handleNavigate8}
              >{`Add to Cart`}</Button>
            </div>
          </Column>
        </Row>
        <Column className="lg:mt-[106px] xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[164px] mt-[183px] mx-[auto] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Row className="items-center justify-between w-[24%]">
              <Text className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left">{`Similiar Product`}</Text>
              <Text className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`View all`}</Text>
            </Row>
            <Image
              src="img_button_4.svg"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] object-contain w-[7%]"
              alt="button"
            />
          </Row>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center justify-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[100%]">
              <Image
                src="img_placeholder_71.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[48%]">
                <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Black Briefcase`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center lg:py-[47px] xl:py-[54px] 2xl:py-[61px] 3xl:py-[73px] py-[81.5px] w-[100%]">
              <Image
                src="img_placeholder_72.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[29%]">
                <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Pink Shirt`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] lg:py-[47px] xl:py-[54px] 2xl:py-[60px] 3xl:py-[72px] py-[81px] w-[100%]">
              <Image
                src="img_placeholder_73.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[38%]">
                <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Gray T-shirt`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[100%]">
              <Image
                src="img_placeholder_74.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                alt="placeholder"
              />
              <Column className="items-center justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[36%]">
                <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left">{`Red Flannel`}</Text>
                <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`$299`}</Text>
              </Column>
            </Column>
          </List>
        </Column>
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]">
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[25%]">
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[27%]">
                  <Image
                    src="img_group19_9.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Elliye`}</Text>
                </Row>
                <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[92%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src="img_call_4.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`+1234567890`}</Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src="img_email_4.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="items-start justify-between w-[57%]">
                <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Product Links`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal mr-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Categories`}</Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`New Arrival`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Features`}</Text>
                    <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Company`}</Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`About`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Blog`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Careers`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Services`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Privacy Policy`}</Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] w-[41%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-white_A700">{`Join our Newsletter`}</Text>
                  <Text className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Column className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 text-bluegray_100 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 tracking-ls1">{`Enter your email`}</Text>
                      <Image
                        src="img_submit_4.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] mx-[auto] not-italic text-bluegray_100 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ProductDetailsPage;
