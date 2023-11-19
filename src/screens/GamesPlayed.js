import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { ChartIcon, CoinIcon, DownIcon, InfoIcon, PurpleIcon, TimerIcon, UpIcon, UserIcon } from '../constants/Icons.constant'
import { GamesImg } from '../constants/Images.constant'
import { Button } from '../components'
import Modal from "react-native-modal";
import { Picker } from 'react-native-wheel-pick';
import { COLORS } from '../constants/color.constant'

const windowWidth = Dimensions.get('window').width;

const GamesPlayed = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Games</Text>
      <View style={styles.cardcontainer}>
        <View style={styles.cardheader}>
          <View style={styles.textview}>
            <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.textview, {fontSize: 12, fontWeight: '600'}]}>UNDER OR OVER</Text>
                <InfoIcon/>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.textview, {fontSize: 12, color: COLORS.primary400}]}>Starting in</Text>
                <TimerIcon/>
                <Text style={[styles.textview, {fontSize: 14, fontWeight: '500'}]}>03:23:12</Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 8}}>
              <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.primary200}}>Bitcoin price will be under </Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.light100}}><Text style={{fontWeight: '700'}}>$24,524</Text> at 7 a ET on 22nd Jan’21</Text>
            </View>
          </View>
          <View style={[styles.imgsection, styles.bg]}>
            <PurpleIcon/>
          </View>
          <View style={[styles.imgsection, styles.bitcoin]}>
            <GamesImg width={120} height={95} />
          </View>
        </View>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'column', gap: 8}}>
              <Text>PRIZE POOL</Text>
              <Text style={{fontSize: 14, fontWeight:'600', color: COLORS.dark200}}>$12,000</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 8}}>
              <Text>UNDER</Text>
              <Text style={{fontSize: 14, fontWeight:'600', color: COLORS.dark200}}>3.25x</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 8}}>
              <Text>OVER</Text>
              <Text style={{fontSize: 14, fontWeight:'600', color: COLORS.dark200}}>1.25x</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 8}}>
              <Text>Entry Fees</Text>
              <View style={{textAlign: 'right', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Text style={{fontSize: 14, fontWeight:'600', color: COLORS.dark200}}>5</Text>
                <CoinIcon/>
              </View>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, fontWeight: '600', paddingVertical: 12, color: COLORS.gray400}}>What’s your prediction?</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4}}>
              <Button title="Under" bgColor={COLORS.primary300} borderRadius={45} color={COLORS.light100} icon={<DownIcon/>} />
              <Button 
                title="Over" bgColor={COLORS.primary100} borderRadius={45} color={COLORS.light100} icon={<UpIcon/>} 
                onPress={()=> {
                  toggleModal()
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <UserIcon/>
              <Text style={{fontSize: 14, fontWeight: '600', color: COLORS.gray400}}>355 Players</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <ChartIcon/>
              <Text style={{fontSize: 14, fontWeight: '600', color: COLORS.gray400}}>View chart</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <View style={{
              width: '100%',
              height: 10,
              backgroundColor: 'white',
              borderRadius: 50,
              flexDirection: 'row',
              overflow: 'hidden'
            }}>
              <View style={{width: '60%', height: 10, backgroundColor: COLORS.pink100}}/>
              <View style={{width: '40%', height: 10, backgroundColor: COLORS.green200}}/>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={{fontSize: 12, fontWeight: '500', color: COLORS.gray100}}>232 predicted under</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={{fontSize: 12, fontWeight: '500', color: COLORS.gray100}}>123 predicted over</Text>
            </View>
          </View>
        </View>
      </View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={300}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        backdropColor={COLORS.dark100}
        backdropOpacity={0.5}
        statusBarTranslucent 
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.contentContainer}>
            <View style={styles.center}>
              <View style={styles.barIcon} />
            </View>
            <View style={{paddingHorizontal: 16}}>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '600', color: COLORS.dark200}}>Your Prediction is Under</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Picker
                  style={{ backgroundColor: 'white', width: 300, height: 215 }}
                  selectedValue='14'
                  pickerData={['11', '12', '13', '14', '15', '16', '17']}
                  onValueChange={value => { }}
                />
              </View>
              <View style={{flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column' , gap: 4}}>
                  <Text style={{fontWeight: '500', color: COLORS.gray100, fontSize: 12, textTransform: 'capitalize'}}>You can win</Text>
                  <Text style={{fontWeight: '600', color: COLORS.green100, fontSize: 14}}>$2000</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <Text><Text>Total</Text>  <CoinIcon/> 5</Text>
                </View>
              </View>
              <View style={{paddingVertical: 16}}>
                <Button title="Submit my prediction" bgColor={COLORS.primary100} borderRadius={45} color={COLORS.light100} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default GamesPlayed

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 16,
    color: '#333',
    fontWeight: '600'
  },
  cardcontainer:{
    width: 360,
    height: 400,
    borderWidth: 2,
    borderColor: '#EEEAF3',
    borderRadius: 5,
    marginTop: 16,
  },
  cardheader:{
    height: 104,
    backgroundColor: '#6231AD',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden'
  },
  content:{
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  footer:{
    height: 110,
    backgroundColor: '#F6F3FA'
  },
  imgsection:{
    position: 'absolute'
  },
  bg:{
    right: 0,
    bottom: -4,
    zIndex: -1
  },
  bitcoin:{
    right: 0,
    bottom: -16
  },
  textview:{
    color: '#D2BAF5',
    padding: 8
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    paddingTop: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 22
  },
  barIcon: {
    width: 30,
    height: 4,
    backgroundColor: "#B5C0C8",
    borderRadius: 3,
    marginLeft: 10
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: windowWidth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
})