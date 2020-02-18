package com.example.potoo;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;

public class MainActivity extends AppCompatActivity {

    Button bouton_potoo = null;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        bouton_potoo = findViewById(R.id.button_potoo);
        bouton_potoo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                RelativeLayout layout = (RelativeLayout)findViewById(R.id.layout_accueil);

                layout.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.potoo));

            }
        });

    }
}
