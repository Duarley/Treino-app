package com.treino.duassemanas;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitorcommunity.texttospeech.TextToSpeechPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(TextToSpeechPlugin.class);
  }
}
